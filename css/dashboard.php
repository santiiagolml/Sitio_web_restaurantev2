<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="author" content="">
    <meta name="description" content="">

    <title>SIVIM</title>

    <link href="assets/css/bootstrap.min.css" rel="stylesheet">
    <link href="assets/css/style_tablero.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Muli:400,700&display=swap" rel="stylesheet">
    <link href="https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css" rel="stylesheet">

</head>

<body>
    <div class="d-flex" id="content-wrapper">
        <div id="sidebar-container" class="bg-ligth border-right">
            <div class="logo">
                <h4 class="font-weight-bold mb-0">SICIV</h4>
            </div>
            <div class="menu list-group-flush">
                <a href="#" class="list-group-item list-group-item-action text-muted bg-ligth p-3 border-0"><i
                   class="icon ion-md-apps lead mr-2"></i>Admin</a>
                <a href="#" class="list-group-item list-group-item-action text-muted bg-ligth p-3 border-0"><i
                   class="icon ion-md-people lead mr-2"></i>Usuarios</a>
                <a href="#" class="list-group-item list-group-item-action text-muted bg-ligth p-3 border-0"><i
                   class="icon ion-md-stats lead mr-2"></i>Estadisticas</a>
                <a href="#" class="list-group-item list-group-item-action text-muted bg-ligth p-3 border-0"><i
                   class="icon ion-md-calendar lead mr-2"></i>Eventos</a>
                <a href="#" class="list-group-item list-group-item-action text-muted bg-ligth p-3 border-0"><i
                   class="icon ion-md-person lead mr-2"></i>Perfil</a>
                <a href="#" class="list-group-item list-group-item-action text-muted bg-ligth p-3 border-0"><i
                   class="icon ion-md-settings lead mr-2"></i>Configuracion</a>   
            </div>
        </div>

      <div id="page-content-wrapper" class="w-100 bg-ligth-blue">
          <nav class="navbar navbar-expand-lg navbar-light bg-ligth border-bottom">
              <div class="container">
                  <button class="btn btn-primary text-primary" id="menu-toggle">Mostrar / Esconder menu</button>
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <!---->
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                          <li class="nav-item active">
                              <a class="nav-link text-dark" href="#">Inicio</a>
                          </li>
                          <li class="nav-item dropdown">
                              <a class="nav-link text-dark dropdown-toggle" href="#" id="navbarDropdown" role="button"
                              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              Diego
                              </a>
                              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                  <a class="dropdown-item" href="#">Mi perfil</a>
                                  <a class="dropdown-item" href="#">Suscripciones</a>
                                  <div class="dropdown-divider"></div>
                                  <a class="dropdown-item" href="#">Cerrar sesion</a>
                              </div>
                          </li>
                      </ul>
                  </div>
              </div>
          </nav>
            
           <div id="content" class="container-fluid p-5">
               <section class="py-3">

                       
               </section>
           </div>
      </div>
    </div>

    <script src="assets/js/jquery-3.5.1.slim.min.js"></script>
    <script src="assets/js/bootstrap.min.js"></script>

    <script>
        $("#menu-toggle").click(function (e){
            e.preventDefault();
            $("#content-wrapper").toggleClass("toggled");
        });
    </script>
</body>

</html>