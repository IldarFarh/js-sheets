import {Sheet} from '@/components/sheet/Sheet'
import {Header} from '@/components/header/Header'
import {Toolbar} from '@/components/toolbar/Toolbar'
import {Formula} from '@/components/formula/Formula'
import {Table} from '@/components/table/Table'
import './scss/index.scss'
import {createStore} from '@core/createStore'
import {rooReducer} from './redux/rooReducer'
import {storage} from '@core/utils'
import {initialState} from './redux/initialState'

const store = createStore(rooReducer, initialState)

store.subscribe((state) => {
  storage('sheet-state', state)
})

const sheet = new Sheet('#app', {
  components: [Header, Toolbar, Formula, Table],
  store
})

sheet.render()
