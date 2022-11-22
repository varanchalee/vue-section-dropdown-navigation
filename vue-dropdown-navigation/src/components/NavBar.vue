<template>
    <div class="container">
        <div class="main-nave">
            <ul >
                <li class="logo"><a href="#"><img src="./images/logo.svg" alt="" /></a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Company</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">About</a></li>
            </ul>
        </div>   
        <div class="split-nav">
            <ul>
                <li class=""><a href="#">Login</a></li>
                <li class=""><a href="#">Register</a></li>
            </ul> 
        </div>
    </div>
</template>

<script>

</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

div .container {
    display: flex;
    flex-direction: row;
    margin: 1rem;
    font-size: 1rem;
}

ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

img {
    width: fit-content;
}
a {
   color: var(--my-dn-content-text);
   text-decoration: none;
}
 
a:hover {
    color: var(--my-dn-title-text);
}

.container ul li {
    padding: 10px 15px;
}

ul {
    display: flex;
}

div .split-nav {
    margin-left: auto;
}

@media (min-width: 760px) {
    .container
    {
        display: flex;
    }
}
</style>