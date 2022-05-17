<template>
  <div>
    <h3>
      Api Datos:
      <b>https://pokedex-tolucajs.herokuapp.com/pokemon/{{ idPokemon }}</b>
    </h3>
    <h3>
      Api Imagen:
      <b
        >https://pokedex-tolucajs.herokuapp.com/pokemon/{{
          idPokemon
        }}/picture</b
      >
    </h3>
    <br />
    <table width="100%" style="border: 1px">
      <tr>
        <th>Datos</th>
        <th>Imagen</th>
      </tr>
      <tbody>
        <tr>
          <th>{{ dataPokemon }}</th>
          <th><img :src="imgPokemon" alt="imagen" /></th>
        </tr>
      </tbody>
    </table>
    <button type="button" @click="getDataPokemon">CONSULTAR API</button>
    &nbsp;<br />
    <input
      type="number"
      step="1"
      min="1"
      max="1000"
      placeholder="ingresa id pokemon"
      v-model="idPokemon"
    />
  </div>
</template>

<script>
export default {
  name: "ConsultarApi",
  data() {
    return {
      idPokemon: 0,
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
