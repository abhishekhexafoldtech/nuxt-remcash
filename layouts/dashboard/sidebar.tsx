import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faHouse,
  faBell,
  faChartSimple,
  faQrcode,
  faUserGroup,
  faCircleQuestion,
  faReceipt,
  faMoneyBillTransfer,
  faGear,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import {useSidebar} from "@/composables/states";
import { useRouter } from "vue-router";

export default defineComponent({
  setup(props, ctx) {
    const sidebar = useSidebar();
    const router = useRouter();
    const context = reactive({
      top: [
        {
          name: "Home",
          icon: faHouse,
        },
        {
          name: "Notifications",
          icon: faBell,
        },
        {
          name: "Reports",
          icon: faChartSimple,
        },
        {
          name: "Quick Qr",
          icon: faQrcode,
        },
        {
          name: "Benificiary",
          icon: faUserGroup,
        },
        {
          name: "Support",
          icon: faCircleQuestion,
        },
        {
          name: "Pay Bills",
          icon: faReceipt,
        },
        {
          name: "Manage Money",
          icon: faMoneyBillTransfer,
        },
      ],
      bottom: [
        {
          name: "Settings",
          icon: faGear,
        },
        {
          name: "Log Out",
          icon: faRightFromBracket,
        },
      ],
    });
    const active = ref("Home");
    watch(active,()=>{
      if(window.innerWidth <= 768){
        sidebar.value = false;
      };
      if(active.value === "Log Out"){
        router.push("/login")
      }
    });
    watch(sidebar,()=>{
      console.log(sidebar.value)
    })
    return {
      context,
      sidebar,
      active,
      router
    };
  },
  render() {
    return (
      <div class={this.sidebar ? "dashboard-sidebar" : "dashboard-sidebar dashboard-sidebar-inactive"}>
        <div class="dashboard-sidebar-top">
          {this.context.top.map((item) => {
            return (
              <button key={item.name} class="dashboard-sidebar-item" onClick={()=>{
                this.active = item.name;
              }}>
                <span>
                  <FontAwesomeIcon icon={item.icon} />
                </span>
                <span class={this.sidebar ? "" : "dashboard-sidebar-item-heading"}>{item.name}</span>
              </button>
            );
          })}
        </div>
        <div class="dashboard-sidebar-bottom">
          {this.context.bottom.map((item) => {
            return (
              <button key={item.name} class="dashboard-sidebar-item" onClick={()=>{
               this.router.push("/login")
              }}>
               <span>
                  <FontAwesomeIcon icon={item.icon} />
                </span>
                <span class={this.sidebar ? "" : "dashboard-sidebar-item-heading"}>{item.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  },
});
