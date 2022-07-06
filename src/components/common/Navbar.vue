
<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"> Pappecongé </a>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Dossiers</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/employeur" class="nav-link"
              >Employeurs</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/comptabilite" class="nav-link"
              >Comptabilite</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/statistiques" class="nav-link"
              >Statistiques</router-link
            >
          </li>
        </ul>
      </div>
      <span class="navbar-text">
        Username
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-person-circle"
          viewBox="0 0 16 16"
        >
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
          <path
            fill-rule="evenodd"
            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
          />
        </svg>
      </span>
    </div>
  </nav>
</template>



<script>
export default {};
</script>

<style>
</style>