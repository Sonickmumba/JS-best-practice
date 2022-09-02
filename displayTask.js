const displayTask = (object) => {
  return `<ul id="item-list" class="items">
        <li class="todo">
          <input id="submit-new-item-${object.index}" type="checkbox" title="" class="checkbox" name="checkbox-${object.index}" />
          <input class="task" id="label-checkbox-${object.index}" value ='${object.description}' type='text'/>
          <div class='drag'>
            <span><i class="uil uil-trash"></i>Delete</span>
          </div>
        </li>
      </ul>`;
}



export default displayTask;