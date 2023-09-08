<script>
  let peso = 0;
  let altura = 0;
  let imc = 0;
  let categoria = "";

  function calcularIMC() {
    if (peso > 0 && altura > 0) {
      imc = (peso / Math.pow(altura, 2)).toFixed(2);

      // Determinando a categoria do IMC
      if (imc < 18.5) {
        categoria = "Abaixo do peso";
      } else if (imc < 24.9) {
        categoria = "Peso normal";
      } else if (imc < 29.9) {
        categoria = "Acima do peso";
      } else if (imc < 34.9) {
        categoria = "Obeso Grau 1";
      } else {
        categoria = "Obeso Grau 2";
      }
    } else {
      imc = 0;
      categoria = "";
    }
  }
</script>

<main>
  <h1>Calculadora de IMC</h1>
  <label>
    Peso (kg): <input type="number" bind:value={peso} on:input={calcularIMC} />
  </label>
  <label>
    Altura (m): <input type="number" bind:value={altura} on:input={calcularIMC} />
  </label>
  {#if imc > 0}
    <p>Seu IMC é {imc}</p>
    <p>Categoria: {categoria}</p>
  {/if}
</main>

<style>
  /* Estilos permanecem os mesmos */
</style>
