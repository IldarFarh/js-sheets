import {Sheet} from '@/components/sheet/Sheet'
import {Header} from '@/components/header/Header'
import {Toolbar} from '@/components/toolbar/Toolbar'
import {Formula} from '@/components/formula/Formula'
import {Table} from '@/components/table/Table'
import './scss/index.scss'

const sheet = new Sheet('#app', {
  components: [Header, Toolbar, Formula, Table]
})

sheet.render()
