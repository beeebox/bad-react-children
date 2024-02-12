import { WrapForward, Forward } from './client'

export default function Page() {
  return (
    <RenderNodeAsChildren
    node={
      Forward // 💥 node is a component not a react node
      /* if you pass down `WrapForward` it will be fine and only give warnings */
      // WrapForward
      }
    />
  )
}

function RenderNodeAsChildren({ node }) {
  return <div>{node}</div>
}
