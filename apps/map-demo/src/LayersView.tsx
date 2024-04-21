import { useCallback, useState } from 'react';
import { css } from 'vite-css-in-js';

const panelStyle = css`
  position: absolute;
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
`;

function Pack(name: string) {
  return {
    visible: true,
    name,
    id: name,
  };
}

function useMapPacks() {
  const [packs] = useState([Pack('foo'), Pack('bar'), Pack('baz')]);
  return [packs, {}];
}

function PackView({ pack, ctrl }) {
  const onDragStart = useCallback((e, idx) => {
    
  }, [])
  return (
    <div draggable   onDragStart={onDragStart}>
      <div>[=]</div>
      <div>{pack.name}</div>
      <button>{pack.visible ? 'hide' : 'show'}</button>
      <button onClick={() => ctrl.removePack(pack.id)}>Delete</button>
    </div>
  );
}

export function PacksListView() {
  const [packs, ctrl] = useMapPacks();
  return (
    <aside className={panelStyle}>
      <div>
        <button>Add layer</button>
      </div>
      <ul>
        {packs.map((pack, key) => (
          <li key={key}>
            <PackView pack={pack} ctrl={ctrl} />
          </li>
        ))}
      </ul>
    </aside>
  );
}
