
##  PASOS PARA IMPLEMENTAR LOS  GUARDIANES DE RUTAS

### Necesario: "Tener implementado la autenticación"

- Paso 1 Creamos el Guard desde la terminal:

```bash
  ionic g guard guards/auth
```
- Paso 2: En el servicio de Auth Crear un getter `currentUser` en el servicio de autenticación

Agrega el siguiente getter en tu servicio de autenticación para obtener el estado actual del usuario:

  ```ts
  get currentUser(): Observable<any> {
    return this.authFire.authState;
  }
```
- `Paso 3:` Inyectar el servicio de autenticación y el enrutador en el guardia

Dentro del archivo `auth.guard.ts`, inyecta el servicio de autenticación y el enrutador para poder acceder a ellos en la lógica del guardia:

  ``` ts
  const authService = inject(AuthService)
  const router = inject(Router)
```
- Paso 4: Definir la lógica de acceso en el guardia de rutas

Agrega la siguiente función en el `auth.guard.ts` de rutas para permitir o denegar el acceso según el estado de autenticación del usuario:
```ts
    return authService.currentUser.pipe(
    map((user) => {
      if (user) {
        return true;
      } else {
        router.navigate(['/login']);
        return false;
      }
    })
    )
  
```
- Paso 5: Asignar el guardia de rutas a las rutas protegidas

En el archivo `app-routing.module.ts`, usa la propiedad `canActivate` para agregar el guardia de rutas (authGuard) a las rutas que deseas proteger:

```ts
canActivate: [authGuard]
```

- ejemplo: 
```ts
const  routes: Routes  = [
	{
		path: 'home',
		loadChildren: () =>  import('./home/home.module').then( m  =>  		m.HomePageModule),
		canActivate: [authGuard]
	},
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full'
	},
	{
		path: 'login',
		loadChildren: () =>  import('./pages/login/login.module').then( m  =>  m.LoginPageModule)
	},
];
```
