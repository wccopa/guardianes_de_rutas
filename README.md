------PASOS PARA IMPLEMENTAR LOS  GUARDIANES DE RUTAS------

Necesario: "Tener implementado la autenticacion"

//Paso 1 Creamos el guard desde la terminal:

```
  ionic g service guard guards/auth
```
//Paso 2: Crear un getter currentUser en el servicio de autenticación

Agrega el siguiente getter en tu servicio de autenticación para obtener el estado actual del usuario:

  ```
  get currentUser(): Observable<any> {
    return this.authFire.authState;
  }
```
//Paso 3: Inyectar el servicio de autenticación y el enrutador en el guardia

Dentro del archivo auth.guard.ts, inyecta el servicio de autenticación y el enrutador para poder acceder a ellos en la lógica del guardia:

  ``` 
  const authService = inject(AuthService)
  const router = inject(Router)
```
//Paso 4: Definir la lógica de acceso en el guardia de rutas

Agrega la siguiente función en el auth.guard.ts de rutas para permitir o denegar el acceso según el estado de autenticación del usuario:

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
  

//Paso 5: Asignar el guardia de rutas a las rutas protegidas

En el archivo app-routing.module.ts, usa la propiedad canActivate para agregar el guardia de rutas (authGuard) a las rutas que deseas proteger:

```
  canActivate: [authGuard]
