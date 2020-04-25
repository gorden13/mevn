<template>
  <div class="greeting">
    <h1 class="greeting__main-text">
      Приветcтвую!
    </h1>
    <!-- <p ref="auto-text" class="greeting__auto-text" /> -->
    <div class="console-container">
      <span id="text" ref="text" />
      <div id="console" ref="console-underscore" class="console-underscore">
        &#95;
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    autoText: `
      Я занимаюсь разработкой быстрых вебсайтов.<br>
      Воплощаю стартапы и любые идеи в жизнь.<br>
      Если тебе нужен сайт, который будет работать реактивно на всех устройствах,<br>
      <b>то ты попал по адресу!</b>
    `,
    words: [
      'Я занимаюсь разработкой реактивных вебсайтов',
      'Воплощаю стартапы и любые идеи в жизнь',
      'Если тебе нужен сайт, который будет работать быстро на всех устройствах',
      'то ты попал по адресу!'
    ]
  }),
  mounted () {
    setTimeout(() => {
      this.printText()
    }, 300)
  },
  methods: {
    printText () {
      // // const text = this.$refs['auto-text'].innerHTML
      // let i = 0
      // const at = this.$refs['auto-text']
      // const self = this
      // const __print = function () {
      //   i++
      //   if (i <= self.autoText.trim().length) {
      //     at.innerHTML = self.autoText.trim().substr(0, i)
      //     setTimeout(function () {
      //       __print()
      //     }, 20)
      //   }
      // }
      // __print()
      const words = this.words
      // const id = this.$refs.text
      let colors = ['tomato', 'rebeccapurple', 'lightblue']
      if (colors === undefined) { colors = ['#fff'] }
      let visible = true
      const con = this.$refs['console-underscore']
      let letterCount = 1
      let x = 1
      let waiting = false
      const target = this.$refs.text
      target.setAttribute('style', 'color: #335ba7')
      setInterval(function () {
        if (letterCount === 0 && waiting === false) {
          waiting = true
          target.innerHTML = words[0].substring(0, letterCount)
          window.setTimeout(function () {
            const usedColor = '#335ba7'
            colors.push(usedColor)
            const usedWord = words.shift()
            words.push(usedWord)
            x = 1
            target.setAttribute('style', 'color: #335ba7')
            letterCount += x
            waiting = false
          }, 1000)
        } else if (letterCount === words[0].length + 1 && waiting === false) {
          waiting = true
          window.setTimeout(function () {
            x = -1
            letterCount += x
            waiting = false
          }, 1000)
        } else if (waiting === false) {
          target.innerHTML = words[0].substring(0, letterCount)
          letterCount += x
        }
      }, 70)
      setInterval(function () {
        if (visible === true) {
          con.className = 'console-underscore hidden'
          visible = false
        } else {
          con.className = 'console-underscore'

          visible = true
        }
      }, 400)
    }
  }
}
</script>

<style lang="scss" scoped>
  .greeting {
    // width: 100%;
    display: flex;
    // justify-content: flex-start;
    flex-direction: column;
    // align-items: center;
    &__auto-text {
      padding: 20px;
      // font-family: 'Consolas';
    }
  }

.hidden {
  opacity:0;
}
.console-container {
  font-size: 1.5em;
  margin-top: 20px;
  font-weight: bold;
  @media screen and (max-width: $screen-tablet-min-width) {
    height: 250px;
  }
  .console-underscore {
    display: inline-block;
    position: relative;
  }
}

</style>
