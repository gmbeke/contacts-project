<template>
  <nav class="navbar navbar-light bg-light justify-content-between">
  <a class="navbar-brand">Navbar</a>
  <form class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
</nav>

<div>
    <!-- header -->
    <div class="ui menu">
      <div class="ui container">
        <a href="" class="header item">
          <img class="logo" src="../assets/Logo2.png "/>
        </a>


        <div class="right item">

          <a href="create.html" class="ui primary button">Create Todo</a>
          <div class="ui simple dropdown item">
            Ali Mwana <i class="dropdown icon"></i>
            <div class="menu">
              <form class="ui large form" method="post" action="">

                <input class="ui button" type="submit" value="Sign out" />
              </form>
            </div>
          </div>

          <div class="ui item">
            <a href="login.html" class="ui primary button">Login</a>
          </div>

          <div class="ui item">
            <a href="register.html" class="ui primary button">Register</a>
          </div>
        </div>
      </div>
    </div>
    <!-- header -->

    <!-- content -->
    <div class="ui container">
      <h1 class="ui header">My List of Todos</h1>

      <table class="ui table">

        <thead>

          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Completed</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>


          <tr>

            <td>Wali</td>
            <td>Wai ndondo</td>



            <td>


              YES <i class="check icon green"></i>


              NO




            </td>

            <td>

              <a href="show.html" class="ui button">
                <i class="eye icon"></i>
              </a>


              <a href="edit.html" class="ui button">
                <i class="pencil icon"></i>
              </a>
            </td>

          </tr>




        </tbody>


      </table>



    </div>

    <!-- content -->
  </div>

</template>

<script>
export default { 
    name: 'ContactList',
    computed(){

    }

}
</script>

<style>

</style>