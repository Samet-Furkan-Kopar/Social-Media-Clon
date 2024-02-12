import Icon from "../../components/Icon";
import Button from "../../components/Button";

const Inbox = () => {
  return (
    <div className="w-full h-full flex items-center justify-center flex-col gap-y-1">
      <Icon size={96} name="direct-empty"/>
        <h6 className="text-[28px] font-light text-center">Your Messages</h6>
        <p className=" text-sm text-[#8e8e8e]">Send private photos and messages to a friend or group.</p>
        <div className="mt-3"><Button>Mesaj Gönder</Button></div>
    </div>
  )
}

export default Inbox
