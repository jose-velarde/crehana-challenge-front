# STACK
● React
● Typescript
● CSS: styled-components/tailwindcss
● UI Testing: Jest, react-testing library, Cypress, PlayWRight, etc
● Graphql (react-apollo/react-query)
● Python
● Web Framework (Django , Flask ó FastAPI)
● ORM (Django, SQLAlchemy ó PonyORM)
● Unit tests
# RESOURCES
● Wireframes
● Lista de cursos
# SCOPE
### 1. Catálogo de cursos
a. Mostrar una lista de cursos con información que ayude al usuario (imagen,
nombre, nivel del curso, precio, descuento)
b. Botón de compra directo desde el curso
c. Barra con opciones de filtro para cursos por categoria, subcategoria, precio o
nivel
d. Navegación utilizando paginación (número de página, total de páginas y
avanzar/retroceder página)
### 2. Detalle de curso
a. Mostrar información del curso (nombre, categoria, subcategoria, nivel del
curso y precio, descuento)
b. Botón de compra
c. Botones para compartir (facebook, twitter, linkedin y link directo)
d. Descripción del curso
e. Etiquetas meta tags para compartir (name, image, description)
### 3. Carrito de compras
a. Lista de cursos agregados al carrito de compras
b. Mostrar el precio total a pagar
c. Botón de compra directo al checkout
### 4. Checkout
a. Validación de sesión/login requerida para entrar al checkout
b. Formulario para ingreso de tarjetas de crédito (titular, número de tarjeta,
fecha de vencimiento y cvv)
c. Validación en el formulario de tarjetas (número de tarjeta, fecha de
vencimiento y cvv)
d. Información relevante del curso (nombre, imagen, nivel, precio)
e. Envío de correo de confirmación de compra
### 5. Login/Register
a. Formulario de registro (nombre, email, contraseña)
b. Formulario para inicio de sesión (email, contraseña)
c. Botones para iniciar sesión por redes sociales (opcional)
d. Envío de correo de confirmación de registro

# Project setup

```console
npx create-next-app@latest --ts
	name: crehana-challenge
npm run lint
```
### eslint and prettier config
https://paulintrognon.fr/blog/typescript-prettier-eslint-next-js

```console
npm install --save-dev eslint-config-prettier
npm i --save-dev typescript @typescript-eslint/parser
npm i --save-dev @typescript-eslint/eslint-plugin@4.33.0
```

### TailwindCSS

```console
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
npx tailwindcss init -p

```