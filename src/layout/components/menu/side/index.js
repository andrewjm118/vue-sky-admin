import { mapState } from 'vuex'
import menuMixin from '@/common/mixins/menu'
import { createMenu } from '@/libs/util.menu'

export default {
  name: 'layout-menu-side',
  mixins: [
    menuMixin
  ],
  render(h) {
    return <div class='layout-menu-side'>
      <scrollbar>
        <el-menu
          collapse={ this.asideCollapse }
          collapseTransition={ this.asideTransition }
          uniqueOpened={ true }
          defaultActive={ this.$route.fullPath }
          ref='menu'
          onSelect={ this.handleMenuSelect }>
          { this.aside.map(menu => createMenu.call(this, h, menu)) }
        </el-menu>
        {
          this.aside.length === 0 && !this.asideCollapse
            ? <div class='layout-menu-empty' flex='dir:top main:center cross:center'>
              <icon name='inbox'/>
              <span>没有侧栏菜单</span>
            </div>
            : null
        }
      </scrollbar>
    </div>
  },
  computed: {
    ...mapState('menu', [
      'aside',
      'asideCollapse',
      'asideTransition'
    ])
  }
}
