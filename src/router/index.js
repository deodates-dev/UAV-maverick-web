import Vue from 'vue'
import Router from 'vue-router'

import HomeModule from '../components/modules/home/HomeModule'

Vue.use(Router)
 
export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '',
      component: HomeModule
    },
    {
      path: '/',
      component: HomeModule
    },
    {
      path: '*',
      component: HomeModule
    },
    {
      path: '/video',
      component: () => import(/* webpackMode: "lazy", webpackChunkName: "VideoModule" */ '../components/modules/video/VideoModule')
    },
    {
      path: '/cockpit',
      component: () => import(/* webpackMode: "lazy", webpackChunkName: "CockpitModule" */ '../components/modules/cockpit/CockpitModule')
    },
    {
      path: '/planner',
      component: () => import(/* webpackMode: "lazy", webpackChunkName: "PlannerModule" */ '../components/modules/planner/PlannerModule')
    },
    {
      path: '/config',
      component: () => import(/* webpackMode: "lazy", webpackChunkName: "ConfigModule" */ '../components/modules/config/ConfigModule'),
      children: [
        {
          path: '',
          component: () => import(/* webpackMode: "lazy", webpackChunkName: "ConfigHome" */ '../components/modules/config/ConfigHome')
        },
        {
          path: 'connections',
          component: () => import(/* webpackMode: "lazy", webpackChunkName: "ConfigConnections" */ '../components/modules/config/ConfigConnections')
        },
        {
          path: 'discovery',
          component: () => import(/* webpackMode: "lazy", webpackChunkName: "ConfigDiscovery" */ '../components/modules/config/ConfigDiscovery')
        },
        {
          path: 'modules',
          component: () => import(/* webpackMode: "lazy", webpackChunkName: "ConfigModules" */ '../components/modules/config/ConfigModules')
        },
        {
          path: 'video',
          component: () => import(/* webpackMode: "lazy", webpackChunkName: "ConfigVideo" */ '../components/modules/config/ConfigVideo')
        },
        {
          path: 'interface',
          component: () => import(/* webpackMode: "lazy", webpackChunkName: "ConfigInterface" */ '../components/modules/config/ConfigInterface')
        },
        {
          path: 'parameter-summary',
          component: () => import(/* webpackMode: "lazy", webpackChunkName: "ConfigParamSummary" */ '../components/modules/config/ConfigParamSummary')
        },
        {
          path: 'parameter-groups',
          component: () => import(/* webpackMode: "lazy", webpackChunkName: "ConfigParamGroups" */ '../components/modules/config/ConfigParamGroups')
        },
        {
          path: 'parameter-list',
          component: () => import(/* webpackMode: "lazy", webpackChunkName: "ConfigParamList" */ '../components/modules/config/ConfigParamList')
        }
      ]
    },
    {
      path: '/analysis',
      component: () => import(/* webpackMode: "lazy", webpackChunkName: "AnalysisModule" */ '../components/modules/analysis/AnalysisModule'),
      children: [
        {
          path: '',
          redirect: 'analysis-index'
        },
        {
          path: 'analysis-index',
          component: () => import(/* webpackMode: "lazy", webpackChunkName: "AnalysisIndex" */ '../components/modules/analysis/AnalysisIndex')
        },
        {
          path: 'analysis-logfile/:id',
          component: () => import(/* webpackMode: "lazy", webpackChunkName: "AnalysisLogfile" */ '../components/modules/analysis/AnalysisLogfile')
        }
      ]
    },
    {
      path: '/system',
      component: () => import(/* webpackMode: "lazy", webpackChunkName: "SystemModule" */ '../components/modules/system/SystemModule'),
      children: [
        {
          path: '',
          component: () => import(/* webpackMode: "lazy", webpackChunkName: "SystemHome" */ '../components/modules/system/SystemHome')
        },
        {
          path: 'services',
          component: () => import(/* webpackMode: "lazy", webpackChunkName: "SystemServices" */ '../components/modules/system/SystemServices')
        },
        {
          path: 'legacy',
          component: () => import(/* webpackMode: "lazy", webpackChunkName: "SystemLegacy" */ '../components/modules/system/SystemLegacy')
        },
        {
          path: 'console',
          component: () => import(/* webpackMode: "lazy", webpackChunkName: "SystemConsole" */ '../components/modules/system/SystemConsole')
        }
      ]
    },
  ]
})
