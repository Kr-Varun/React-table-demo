const TableItemComponent = props => {
    return <tr>
                <td className="text-center"><input type="checkbox" name={props?.item?.id} id={props?.item?.id} 
                      key={Math.random()}
                      defaultChecked={props?.item?.selected} 
                      onChange={()=>props.itemChanged(props.item.id)}
                      /></td>
                <td className="text-center">{props?.item?.id}</td>
                <td>{props?.item?.title}</td>
            </tr>
}

export default TableItemComponent;
