// og:image por página (1200x630), generada en build: satori (SVG) + sharp (PNG).
import { readFileSync } from "node:fs";
import type { APIRoute, GetStaticPaths } from "astro";
import satori from "satori";
import sharp from "sharp";
import { SUPPORTED_LANGUAGES } from "@/lib/constants";
import { entryLang, entrySlug, getPages, getPosts } from "@/lib/routes";

const font = (w: 400 | 700) =>
  readFileSync(`node_modules/@fontsource/geist/files/geist-latin-${w}-normal.woff`);
const fonts = [
  { name: "Geist", data: font(400), weight: 400 as const },
  { name: "Geist", data: font(700), weight: 700 as const },
];

export const getStaticPaths = (async () => {
  const entries = [
    ...(await getPages()),
    ...(await Promise.all(SUPPORTED_LANGUAGES.map(getPosts))).flat(),
  ];
  return entries.map((e) => ({
    params: { lang: entryLang(e), slug: entrySlug(e) },
    props: { title: e.data.h1, label: e.collection },
  }));
}) satisfies GetStaticPaths;

const div = (style: object, children: unknown) => ({ type: "div", props: { style, children } });

export const GET: APIRoute = async ({ props }) => {
  const { title, label } = props as { title: string; label: string };
  const svg = await satori(
    div(
      {
        width: 1200,
        height: 630,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 80,
        boxSizing: "border-box",
        background: "#09090b",
        color: "#fafafa",
        fontFamily: "Geist",
      },
      [
        div({ fontSize: 34, color: "#a1a1aa", textTransform: "uppercase" }, label),
        div({ width: 1040, fontSize: title.length > 60 ? 60 : 76, fontWeight: 700, lineHeight: 1.1 }, title),
        div({ fontSize: 34, color: "#a1a1aa" }, "wickz.dev · Santiago Griman"),
      ],
    ) as never,
    { width: 1200, height: 630, fonts },
  );
  const png = await sharp(Buffer.from(svg)).png().toBuffer();
  return new Response(new Uint8Array(png), { headers: { "Content-Type": "image/png" } });
};
