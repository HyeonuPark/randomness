module.exports = (function customRandom (rng) {
  return {
    customRandom: customRandom,
    random: function random (range) {
      range = range || 1
      return rng() * range
    },
    between: function between (min, max) {
      if (min > max) {
        var _min = min
        min = max
        max = _min
      }
      return min + (rng() * (max - min))
    },
    betweenInt: function betweenInt (min, max) {
      if (min > max) {
        var _min = min
        min = max
        max = _min
      }
      min = Math.ceil(min)
      max = Math.floor(max)
      var range = max - min + 1
      return min + Math.floor(rng() * range)
    },
    choice: function choice (array) {
      var index = Math.floor(rng() * array.length)
      return array[index]
    },
    shuffle: function shuffle (array) {
      var selected, index
      array = array.slice()
      for (var i = array.length - 1; i > 0; i--) {
        index = Math.floor(rng() * (i + 1))
        selected = array[index]
        array[index] = array[i]
        array[i] = selected
      }
      return array
    }
  }
})(Math.random)
