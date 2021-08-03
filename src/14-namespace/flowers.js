var Flowers;
(function (Flowers) {
    function give(count) {
        return count + ' flowers';
    }
    Flowers.give = give;
})(Flowers || (Flowers = {}));
