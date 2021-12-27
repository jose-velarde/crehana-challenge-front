# STACK
- [x] React
- [x] Typescript
- [x] CSS: styled-components/tailwindcss
- [ ] UI Testing: Jest, react-testing library, Cypress, PlayWRight, etc
- [ ] Graphql (react-apollo/react-query)
- [x] Python
- [x] Web Framework (Django , Flask ó FastAPI)
- [x] ORM (Django, SQLAlchemy ó PonyORM)
- [ ] Unit tests
# RESOURCES
* Wireframes
* Lista de cursos
# SCOPE
### 1. Catálogo de cursos
1. 1. - [x] Mostrar una lista de cursos con información que ayude al usuario (imagen,
nombre, nivel del curso, precio, descuento)
1. 2. - [x] Botón de compra directo desde el curso
1. 3. - [x] Barra con opciones de filtro para cursos por categoria, subcategoria, precio o
nivel
1. 4. - [x] Navegación utilizando paginación (número de página, total de páginas y
avanzar/retroceder página)
### 2. Detalle de curso
2. 1. - [ ] Mostrar información del curso (nombre, categoria, subcategoria, nivel del
curso y precio, descuento)
2. 2. - [ ] Botón de compra
2. 3. - [ ] Botones para compartir (facebook, twitter, linkedin y link directo)
2. 4. - [ ] Descripción del curso
2. 5. - [ ] Etiquetas meta tags para compartir (name, image, description)
### 3. Carrito de compras
3. 1. - [ ] Lista de cursos agregados al carrito de compras
3. 2. - [ ] Mostrar el precio total a pagar
3. 3. - [ ] Botón de compra directo al checkout
### 4. Checkout
4. 1. - [ ] Validación de sesión/login requerida para entrar al checkout
4. 2. - [ ] Formulario para ingreso de tarjetas de crédito (titular, número de tarjeta,
fecha de vencimiento y cvv)
4. 3. - [ ] Validación en el formulario de tarjetas (número de tarjeta, fecha de
vencimiento y cvv)
4. 4. - [ ] Información relevante del curso (nombre, imagen, nivel, precio)
4. 5. - [ ] Envío de correo de confirmación de compra
### 5. Login/Register
5. 1. - [ ] Formulario de registro (nombre, email, contraseña)
5. 2. - [ ] Formulario para inicio de sesión (email, contraseña)
5. 3. - [ ] Botones para iniciar sesión por redes sociales (opcional)
5. 4. - [ ] Envío de correo de confirmación de registro

# Project setup

```console
npx create-next-app@latest --ts name: crehana-challenge
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
npm install @tailwindcss/forms@latest

npm install formik --save
npm install yup --save

```
https local dev server
https://dev.to/nakib/using-https-on-next-js-local-development-server-bcd
