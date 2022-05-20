<template>
  <div>
    <h3>
      Api Datos:
      <b class="text-info">
        https://pokedex-tolucajs.herokuapp.com/pokemon/<b class="text-danger">{{
          idPokemon
        }}</b>
      </b>
    </h3>
    <h3>
      Api Imagen:
      <b class="text-info"
        >https://pokedex-tolucajs.herokuapp.com/pokemon/<b
          class="text-danger"
          >{{ idPokemon }}</b
        >/picture</b
      >
    </h3>
    <br />
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-3">
        <button
          type="button"
          class="btn btn-outline-info"
          @click="getDataPokemon"
        >
          CONSULTAR API
        </button>
      </div>
      <div class="col-md-3">
        <input
          class="form-control"
          style="text-align: center"
          type="number"
          step="1"
          min="1"
          max="1000"
          placeholder="ingresa id pokemon"
          v-model="idPokemon"
        />
      </div>
      <div class="col-md-3"></div>
    </div>
    <br />
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <table class="table table-bordered table-striped table-hover">
          <tr>
            <th>Datos</th>
            <th>Imagen</th>
          </tr>
          <tbody>
            <tr>
              <th>
                <pre>
                  {{ dataPokemon }}
                </pre>
              </th>
              <th>
                <img :src="imgPokemon" alt="imagen" class="img-thumbnail" />
              </th>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EstilosBoostrap",
  data() {
    return {
      idPokemon: 1,
      imgPokemon: "",
      dataPokemon: "",
    };
  },
  methods: {
    async getDataPokemon() {
      let response = await this.$peticionesApi(
        "https://pokedex-tolucajs.herokuapp.com/pokemon/" + this.idPokemon
      );
      if (response != null) {
        console.log(response);
        this.dataPokemon = response.data;
        this.imgPokemon = `https://pokedex-tolucajs.herokuapp.com/pokemon/${this.idPokemon}/picture`;
      }
    },
  },
};
</script>

<style scoped></style>
