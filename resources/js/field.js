import IndexField from './components/IndexField'
import DetailField from './components/DetailField'
import FormField from './components/FormField'

Nova.booting((app, store) => {
  app.component('index-nova-translatable-slug', IndexField)
  app.component('detail-nova-translatable-slug', DetailField)
  app.component('form-nova-translatable-slug', FormField)
})
