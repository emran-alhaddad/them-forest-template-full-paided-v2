// ** Mock Adapter
import mock from 'src/@fake-db/mock'

const icons = [{ icon: 'alien' }, { icon: 'armchair' }, { icon: 'badge-wc' }, { icon: 'ghost-2' }, { icon: 'whirl' }]
mock.onGet('/api/icons/data').reply(() => {
  return [200, icons]
})
