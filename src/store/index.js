import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isActive: false,
    mainArr: [
      {
        name: 'Location',
        arr: [
          {
            name: 'New York',
            active: false
          },
          {
            name: 'Remote',
            active: false
          },
          {
            name: 'Los Angeles',
            active: false
          },
          {
            name: 'Chicago',
            active: false
          }
        ]
      },
      {
        name: 'Requirements',
        arr: [
          {
            name: 'Communication',
            active: false
          },
          {
            name: 'Microsoft excel',
            active: false
          },
          {
            name: 'Microsoft Word',
            active: false
          }
        ]
      },
      {
        name: 'Task',
        arr: [
          {
            name: 'Answering phone calls',
            active: false
          },
          {
            name: 'Providing customer service',
            active: false
          },
          {
            name: 'Creating reports',
            active: false
          }
        ]
      },
      {
        name: 'Required experience',
        arr: [
          {
            name: '0',
            active: false
          },
          {
            name: '1 year',
            active: false
          },
          {
            name: '3years',
            active: false
          },
          {
            name: '5+ years',
            active: false
          }
        ]
      }
    ],
    moreObj: {
      name: 'More',
      arr: [
        'Positions',
        'Companies',
        'Benefits'
      ]
    }
    // objSend: {
    //   Location: null,
    //   Requirements: null,
    //   Task: null,
    //   'Required experience': null
    // }
  },
  getters: {
    active (state) {
      return state.isActive
    },
    mainArr (state) {
      return state.mainArr
    },
    moreObj (state) {
      return state.moreObj
    }
  },
  mutations: {
    showMainArr (state) {
      if (localStorage.getItem('mainArr')) {
        try {
          state.mainArr = JSON.parse(localStorage.getItem('mainArr'))
        } catch (e) {
          localStorage.removeItem('mainArr')
        }
      }
    },
    saveMainArr (state) {
      const parsed = JSON.stringify(state.mainArr)
      localStorage.setItem('mainArr', parsed)
    },
    findItem (state, { name, nameItem }) {
      const itemActTitle = state.mainArr.find((item) => item.name === name)
      const itemActIdx = itemActTitle.arr.findIndex(item => item.name === nameItem)
      const itemAct = itemActTitle.arr.find((item) => item.name === nameItem)
      if (itemAct.active === false) {
        itemActTitle.arr.splice(itemActIdx, 1)
        itemActTitle.arr.unshift(itemAct)
        itemActTitle.arr.forEach((el) => { el.active = false })
        itemAct.active = true
      } else {
        if (localStorage.getItem('mainArr')) {
          try {
            const clone = JSON.parse(localStorage.getItem('mainArr'))
            const cloneObj = clone.find((item) => item.name === name)
            itemActTitle.arr.splice(0, itemActTitle.arr.lenght)
            itemActTitle.arr = cloneObj.arr.concat()
          } catch (e) {
            localStorage.removeItem('mainArr')
          }
        }
      }
    },
    focusItput (state) {
      state.isActive = !state.isActive
    }
  },
  actions: {
    showMainArr (ctx) {
      ctx.commit('showMainArr')
    },
    saveMainArr (ctx) {
      ctx.commit('saveMainArr')
    },
    findItem (ctx, { name, nameItem }) {
      console.log(name)
      console.log(nameItem)
      ctx.commit('findItem', { name, nameItem })
    },
    focusItput (ctx) {
      ctx.commit('focusItput')
    }
  },
  modules: {
  }
})
