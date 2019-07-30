<template>
    <div>
        <v-container>
            <h1>Kitchen orders</h1>
            <div class="kitchen-navbar">
                <div class="kitchen-menu">
                    <ul>
                        <a href="#">
                            <li class="[Current orders]">Current orders</li>
                        </a>
                        <a href="">
                            <li class="[Edit menus]">Edit menus</li>
                        </a>
                        <a href="">
                            <li class="[Edit tables]">Edit tables</li>
                        </a>
                        <a href="">
                            <li class="[Settings]">Settings</li>
                        </a>
                    </ul>
                </div>
            </div>
            <ul>
                <li v-for="order in orders" v-bind:key="order.id">{{ order.name }}</li>
            </ul>
        </v-container>
    </div>
</template>
<script>
export default {
    name: "OrdersIndex",
    data() {
        return {
            orders: [
                { id: 1, name: "Felix's order" },
                { id: 2, name: "Charles's order" },
                { id: 3, name: "Freddy's order" }
            ]
        };
    }
};

</script>

<style>

.kitchen-navbar {
   height: 10vh;
    width: 100vw;
    background-color: black;
    color: white;
    display: flex;
    justify-content: flex-end;
    text-align: center;
}

.kitchen-menu {
    height: 10vh;

    li {
        display: inline;
        padding: 1em 2em;
    }

    ul {
        list-style-type: none;
        display: flex;
        text-align: center;
        padding: 0em 2em;
    }
    a {
      padding: 2em 0em;
      color: white;
       &:active {
        background-color: white;
        color: black;
        }
    }

}

.kitchen-container {
  height: 800px;
  display: flex;

}

.kitchen-order-menu-section {
  background-color: #e0e0e0;
  width: 30vw;
  height: 100%;
}

.kitchen-order-actual-section {
   width: 70vw;
  height: 100%;
  margin: 3em;
}

.kitchen-order-list {
  ul {
    width: 30vw;
    margin: 0em;
    padding: 0em;
  }
  li {
    height: 10vh;
    width: 30vw;
    background: #bfbfbf;
    border: 1px solid white;
    list-style-type: none;
    color: white;
     text-align: center;
        padding: 0em 2em;
  }
}

</style>
