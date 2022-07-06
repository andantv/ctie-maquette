<template>
  <div class="container" style="minWidth: 100%">
    <div class="row">
      <div class="col-sm" style="background: grey">
        <fieldset
          class="border p-"
          style="
            color: black;
            border: 2px solid black !important;
            margin-bottom: 10px;
          "
        >
          <legend class="float-none w-auto">Recherches</legend>

          <b-row style="margin: 10px">
            <b-col
              ><label>Label</label><b-form-input placeholder="Value" />
            </b-col>
            <b-col
              ><label>Label</label><b-form-input placeholder="Value"
            /></b-col>
            <b-col
              ><label>Label</label><b-form-input placeholder="Value"
            /></b-col>
          </b-row>

          <b-row style="margin: 10px">
            <b-col
              ><select class="form-select" aria-label="Default select example">
                <option selected>Select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select></b-col
            >
            <b-col
              ><select class="form-select" aria-label="Default select example">
                <option selected>Select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select></b-col
            >
            <b-col><b-form-input placeholder="Value" /></b-col>
          </b-row>

          <b-row style="margin: 10px">
            <b-col
              ><select class="form-select" aria-label="Default select example">
                <option selected>Select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select></b-col
            >
            <b-col><b-form-input placeholder="Value" /></b-col>
            <b-col
              ><select class="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </b-col>
          </b-row>
          <div class="d-grid gap-2 d-md-flex justify-content-md-end" style="margin: 10px">
            <button class="btn btn-secondary me-md-2" type="button">
              Search button
            </button>
          </div>
        </fieldset>
      </div>
    </div>
  </div>

  <div class="container" style="minWidth: 100%">
    <div class="row">
      <div class="col-sm">
        <fieldset
          class="border p-"
          style="color: black; border: 1px solid black !important; margin: 10px"
        >
          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <button
              v-b-modal.modal-1
              class="btn btn-primary me-md-2"
              type="button"
            >
              Ajouter un dossier
            </button>

            <b-modal id="modal-1" size="lg" title="BootstrapVue">
              <b-form inline>
                <label class="sr-only" for="inline-form-input-name"
                  >Label</label
                >
                <b-form-textarea
      id="textarea"
      v-model="text"
      placeholder="Enter something..."
      rows="3"
      max-rows="6"
    ></b-form-textarea>

                    <label class="sr-only" for="inline-form-input-name"
                  >Label</label
                >

                <b-form-input
                  id="inline-form-input-name"
                  class="mb-2 mr-sm-2 mb-sm-0"
                  placeholder="Placeholder"
                ></b-form-input> 
              
                <div class="form-group">
                  <label for="exampleFormControlSelect2"
                    >Example multiple select</label
                  >
                  <select
                    multiple
                    class="form-control"
                    id="exampleFormControlSelect2"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>

                

                <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0"
                  >Check button</b-form-checkbox
                >
              </b-form>
            </b-modal>
          </div>
          <div>
            <b-table striped hover :items="items"></b-table>
          </div>

          <div class="overflow-auto" style="margin.top: 10px">
    <!-- Use text in props -->
    <b-pagination
      v-model="currentPage"
      :total-rows="120"
      :per-page="5"
      first-text="First"
      prev-text="Prev"
      next-text="Next"
      last-text="Last"
    ></b-pagination>
          </div>
          <legend class="float-none w-auto">Table Component</legend>
        </fieldset>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      selected: "selected",
      options: [
        { value: "selected", text: "Please select an option" },
        { value: "a", text: "Option 1" },
        { value: "b", text: "Option 2" },
      ],
      items: [
        {
          id: "1",
          workflow: "Nouveau",
          dataKey: "1223",
          num_dossier: "43234",
          matricule: "535542342354",
          nom: "Duffour",
          prenom: "Alexandre",
          matricule_employeur: "23423",
          employeur: "2345425",
          statut: "Envoyé",
          date_statut: "02/02/2022",
          courrier_envoye: true,
        },
        {
          id: "2",
          workflow: "Nouveau",
          dataKey: "1223",
          num_dossier: "432642",
          matricule: "23463",
          nom: "Aranda",
          prenom: "Nicolas",
          matricule_employeur: "6532234",
          employeur: "6534634",
          statut: "Envoyé",
          date_statut: "02/02/2022",
          courrier_envoye: true,
        },
        {
          id: "3",
          workflow: "Nouveau",
          dataKey: "1223",
          num_dossier: "5653454",
          matricule: "345345",
          nom: "Duipon",
          prenom: "Estevan",
          matricule_employeur: "345",
          employeur: "643446",
          statut: "Envoyé",
          date_statut: "02/02/2022",
          courrier_envoye: true,
        },
        {
          id: "4",
          workflow: "Nouveau",
          dataKey: "1223",
          num_dossier: "4545345",
          matricule: "5355454",
          nom: "Aranda",
          prenom: "Aranda",
          matricule_employeur: "3453453",
          employeur: "46567435345",
          statut: "Envoyé",
          date_statut: "02/02/2022",
          courrier_envoye: true,
        },
        {
          id: "5",
          workflow: "Retour",
          dataKey: "1223",
          num_dossier: "423223",
          matricule: "5355454",
          nom: "Martinez",
          prenom: "Pedro",
          matricule_employeur: "232312313",
          employeur: "34134",
          statut: "Envoyé",
          date_statut: "02/02/2022",
          courrier_envoye: true,
        },
        {
          id: "6",
          workflow: "Retour",
          dataKey: "1223",
          num_dossier: "423223",
          matricule: "5355454",
          nom: "Saunders",
          prenom: "Anaí",
          matricule_employeur: "2324",
          employeur: "34134",
          statut: "Envoyé",
          date_statut: "02/02/2022",
          courrier_envoye: true,
        },
        {
          id: "7",
          workflow: "Retour",
          dataKey: "1223",
          num_dossier: "423223",
          matricule: "5355454",
          nom: "Aranda",
          prenom: "Joseph",
          matricule_employeur: "2324",
          employeur: "34134",
          statut: "Envoyé",
          date_statut: "02/02/2022",
          courrier_envoye: true,
        },
        {
          id: "8",
          workflow: "Retour",
          dataKey: "1223",
          num_dossier: "423223",
          matricule: "5355454",
          nom: "Valerie",
          prenom: "Alex",
          matricule_employeur: "2324",
          employeur: "34134",
          statut: "Envoyé",
          date_statut: "02/02/2022",
          courrier_envoye: true,
        },
        {
          id: "9",
          workflow: "Retour",
          dataKey: "1223",
          num_dossier: "423222323",
          matricule: "5355454223",
          nom: "Smith",
          prenom: "Maximo",
          matricule_employeur: "2324",
          employeur: "341342323",
          statut: "Envoyé",
          date_statut: "02/02/2022",
          courrier_envoye: true,
        },
        {
          id: "10",
          workflow: "Retour",
          dataKey: "1223",
          num_dossier: "423223",
          matricule: "5355454",
          nom: "Oliveira",
          prenom: "David",
          matricule_employeur: "2324",
          employeur: "34134",
          statut: "Envoyé",
          date_statut: "02/02/2022",
          courrier_envoye: true,
        },
       
      ],
    };
  },
});
</script>

<style>
</style>