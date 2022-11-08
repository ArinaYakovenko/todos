import React from 'react';
import style from '../../index.module.scss';

import done from '../../assets/img/done.svg';
import del from '../../assets/img/delete.svg';

import { useDispatch } from 'react-redux';
import { removeFolder, complatedTask } from '../../redux/slice-folder/sliceFolder';

export default function Folder({ value }) {
  const dispatch = useDispatch();

  const removeThisFolder = (id) => {
    dispatch(removeFolder(id));
  }

  const complTas = (id) => {
    dispatch(complatedTask(id))
  }
  return (
    <div className={style.folder}>
      <button onClick={() => complTas(value.id)}><img src={done} alt="done" /></button>
      <p className={value.complated ? style.active : ''}>{value.text}</p>
      <button onClick={() => removeThisFolder(value.id)}><img src={del} alt="done" /></button>
    </div>)
}
