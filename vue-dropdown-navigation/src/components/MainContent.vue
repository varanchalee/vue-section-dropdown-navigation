<template>
  <div class="main-contain">
    <div class="text-contain">
      <div class="title">
        <h1>Make<br />remote work</h1>
      </div>
      <p>
        Get your team in sync, no matter your lacation.<br />
        Streamline processes, create team rituals, and<br />
        watch productivity soar.
      </p>
      <div class="btn">Learn more</div>

      <div class="all-logo">
        <img src="./images/client-databiz.svg" alt="" />
        <img src="./images/client-audiophile.svg" alt="" />
        <img src="./images/client-meet.svg" alt="" />
        <img src="./images/client-maker.svg" alt="" />
      </div>
    </div>
    <div class="img-contain">
      <img src="./images/image-hero-desktop.png" alt="" />
    </div>
  </div>
</template>

<style scoped>
div .main-contain {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50%, 2fr));
  margin: 2.5rem 6rem;
}
.img-contain {
  display: flex;
  width: 100%;
  justify-content: center;
}
.img-contain img {
  width: 25rem;
  height: 30rem;
}

.text-contain {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  top: 2rem;
  width: 100%;
}

h1 {
  font-weight: 700;
  font-size: 4rem;
  line-height: 1;
  margin-bottom: 2.5rem;
}

p {
  color: var(--my-dn-content-text);
  font-size: .85rem;
  margin-block-end: 1.5rem;
  font-weight: 500;
}

.btn {
  color: var(--my-dn-background);
  background-color: var(--my-dn-title-text);
  font-size: 1rem;
  font-weight: 500;
  border: 1px solid var(--my-dn-title-text);
  border-radius: 10px;
  padding: 0.4rem 1.15rem;
  margin-block-end: 3rem;
  transition: 0.3s ease-in-out;
}

.btn:hover {
  color: var(--my-dn-title-text);
  background-color: var(--my-dn-background);
  cursor: pointer;
}

ul {
  list-style: none;
  padding: 0;
}

.all-logo {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: fit-content;
    
}
.all-logo img {
    height: 25px;
    margin-right: 3rem;
}
.all-logo img:nth-of-type(2n+1){
    height: 15px;
}

</style>
