export { default as Logo } from '../../components/Logo.vue'
export { default as Footer } from '../../components/wrap/Footer.vue'
export { default as Header } from '../../components/wrap/Header.vue'
export { default as Navbar } from '../../components/wrap/Navbar.vue'
export { default as NavbarLi } from '../../components/wrap/NavbarLi.vue'

export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo'}" */).then(c => c.default || c)
export const LazyFooter = import('../../components/wrap/Footer.vue' /* webpackChunkName: "components/wrap/Footer'}" */).then(c => c.default || c)
export const LazyHeader = import('../../components/wrap/Header.vue' /* webpackChunkName: "components/wrap/Header'}" */).then(c => c.default || c)
export const LazyNavbar = import('../../components/wrap/Navbar.vue' /* webpackChunkName: "components/wrap/Navbar'}" */).then(c => c.default || c)
export const LazyNavbarLi = import('../../components/wrap/NavbarLi.vue' /* webpackChunkName: "components/wrap/NavbarLi'}" */).then(c => c.default || c)
