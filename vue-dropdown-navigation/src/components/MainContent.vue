<template>
    <div class="main-contain">
        <div class="text-contain">
            <div class="title">
                <h1> Make<br/>remote work</h1>
            </div>
            <p>Get your team in sync, no matter your lacation.<br />
                Streamline processes, create team rituals, and<br />
                watch productivity soar.
            </p>
            <div class="btn">Learn More</div>
            <div class="all-logo">
                <span><img src="./images/client-databiz.svg" alt="" /></span>
                <span><img src="./images/client-audiophile.svg" alt="" /></span>
                <span><img src="./images/client-meet.svg" alt="" /></span>
                <span><img src="./images/client-maker.svg" alt="" /></span>     
            </div>
        </div>
        <div class="img-contain">
            <img src="./images/image-hero-desktop.png" alt="">
        </div>

    </div>
</template>

<script>

</script>
<style scoped>
div .main-contain {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(50%, 2fr));
    margin: 2.5rem 8rem; 
    /* grid-gap: 0.5rem; */
}
.img-contain{
   display: flex;
   /* align-items: center; */
   justify-content: center;
   
}
.img-contain img {
    width: 350px;
    height: 450px;
}

.text-contain {
    display: flex;
    align-items:flex-start;
    justify-content: center;
    flex-direction: column;
    margin-block-start: 2.5rem;
}

h1 {
    font-weight: 700;
    font-size: 4rem;
    line-height: 1;
    margin-bottom: 2rem;
}

p {
    color: var(--my-dn-content-text);
    font-size: 1rem;
    margin-block-end: 1.75rem;
}

.btn {
    color: var(--my-dn-background);
    background-color: var(--my-dn-title-text);
    font-size: .75rem;
    font-weight: 700;
    border: 1px solid var(--my-dn-title-text);
    border-radius: 10px;
    padding: .4rem 1rem;
    margin-block-end: 3rem;
}

.btn:hover {
    color: var(--my-dn-content-text);
    background-color: var(--my-dn-background);
    cursor: pointer;
}

ul {
    list-style: none;
    padding: 0;
   
}

div .all-logo {
    align-items: baseline;
    min-width: 10rem;
    flex-direction: row; 
}

.all-logo > span {
    padding-inline-end: 1.75rem;
}

.all-logo > span:nth-child(2) {
    top: 10px;
    /* border: 1px solid var(--my-dn-title-text); */
}

</style>