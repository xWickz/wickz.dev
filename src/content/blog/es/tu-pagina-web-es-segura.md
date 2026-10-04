---
key: website-security
title: ¿Tu página web es segura? 5 cosas que revisar
description: Cinco revisiones de seguridad que cualquier dueño de negocio puede hacer en su página web, sin saber programar, y qué hacer si algo falla.
h1: ¿Tu página web es segura? 5 cosas que revisar
published: 2026-10-03
faqs:
  - q: ¿Una página pequeña también puede ser atacada?
    a: Sí. La mayoría de los ataques son automáticos, programas que recorren internet buscando fallos conocidos sin importar el tamaño del negocio.
  - q: ¿El candado del navegador significa que la página es segura?
    a: Significa que la conexión va cifrada (HTTPS), lo cual es necesario pero no suficiente. Una página con candado puede tener otros problemas, como contraseñas débiles o software desactualizado.
  - q: ¿Qué hago si creo que mi página fue hackeada?
    a: Cambia las contraseñas de hosting, dominio y panel de administración, avisa a quien te hizo la web y restaura una copia de seguridad limpia. Search Console te avisa si Google detecta contenido malicioso.
---

Muchas páginas web se publican y nadie vuelve a revisarlas. Funcionan, se ven bien, y la seguridad queda para después. El problema es que, cuando algo falla, te enteras tarde: un cliente te avisa de que tu web redirige a otro sitio, o Google la marca como peligrosa.

No hace falta saber programar para hacer una revisión básica. Estas son cinco cosas que puedes comprobar tú mismo.

## 1. Que cargue con HTTPS (el candado)

Abre tu página y mira la barra de direcciones. Debe empezar por `https://` y mostrar un candado o un ícono de ajustes, no un aviso de "No seguro".

HTTPS cifra lo que viaja entre el visitante y tu web. Sin él, los datos de un formulario de contacto se pueden leer por el camino, y los navegadores advierten al visitante, lo que espanta clientes.

**Si falla:** la mayoría de hostings ofrecen el certificado gratis. Pídeselo a tu proveedor o a quien hizo la web.

## 2. Quién tiene acceso a tu dominio y hosting

Haz una lista de las cuentas de las que depende tu página:

- **El dominio** (dónde compraste `tunegocio.com`).
- **El hosting** (dónde está alojada la web).
- **El panel de administración**, si tu web tiene uno.

Para cada una, pregúntate: ¿la cuenta está a **mi nombre**? ¿Sé la contraseña? ¿Quién más la tiene?

Es muy común que el dominio quede registrado a nombre del programador o de un exempleado. Si esa persona desaparece, recuperarlo puede ser un problema serio.

**Si falla:** pide que el dominio y el hosting se pasen a una cuenta tuya, cambia las contraseñas y activa la verificación en dos pasos donde se pueda.

## 3. Que los formularios no sean una puerta abierta

Si tu web tiene formulario de contacto, de registro o de pedidos, revisa:

- **¿Te llega spam?** Si recibes mensajes basura a diario, el formulario no tiene protección contra bots.
- **¿Pide solo lo necesario?** Cuantos menos datos personales guardes, menos riesgo si algo se filtra.
- **¿Adónde van los datos?** Deberías saber si se guardan en una base de datos, se envían a un correo o ambas cosas.

**Si falla:** un formulario se puede proteger con validación y un sistema antispam. Es un ajuste pequeño para quien mantiene la web.

## 4. Que el software esté actualizado

Si tu página está hecha con WordPress u otro sistema con plugins, cada plugin desactualizado es un posible punto de entrada. Los ataques automáticos buscan justamente versiones viejas con fallos conocidos.

**Qué revisar:** entra al panel y mira si hay actualizaciones pendientes. Si hay plugins que no usas, desinstálalos.

Las páginas estáticas, que no tienen panel ni base de datos expuesta, tienen mucho menos que actualizar. Por eso suelen ser una buena opción para landing pages y catálogos.

## 5. Que exista una copia de seguridad

Pregunta a tu hosting o a quien mantiene tu web: **si mañana la página se borra, ¿cómo la recuperamos?**

La respuesta debería incluir dónde está la copia, cada cuánto se hace y cuánto tarda restaurarla. Si nadie sabe responder, no hay copia.

**Si falla:** muchos hostings hacen copias automáticas, solo hay que activarlas. Si tu web está en un repositorio de código, el propio repositorio ya es una copia del sitio.

## Lista rápida

- [ ] La página carga con `https://` y sin avisos.
- [ ] El dominio y el hosting están a mi nombre y sé las contraseñas.
- [ ] Tengo verificación en dos pasos en esas cuentas.
- [ ] Los formularios no reciben spam y piden solo lo necesario.
- [ ] No hay actualizaciones pendientes ni plugins sin usar.
- [ ] Sé dónde está la copia de seguridad y cómo restaurarla.

Si alguna casilla te quedó sin marcar y no sabes cómo resolverla, [escríbeme](mailto:hi@wickz.dev) y lo revisamos. Si estás por hacer una web nueva, en [desarrollo web](/es/servicios/desarrollo-web-full-stack/) te cuento cómo trabajo.
