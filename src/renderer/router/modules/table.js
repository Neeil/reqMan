import Layout from '@/layout'

const tableRouter = {
    path : '/table',
    component: Layout,
    redirect: '/table/complex-table',
    name: 'Table',
    meta: {
        title: 'Table',
        icon : 'table'
    },
    children :[
        {
            path: 'complex-table',
            component: () => import('@/views/table/complex-table'),
            name: 'ComplexTable',
            meta: { title: 'Complex Table' }
        },
        {
            path: 'drag-table',
            component: () => import('@/views/table/drag-table'),
            name: 'DragTable',
            meta: { title: 'Drag Table' }
        },
    ]
}
export default tableRouter