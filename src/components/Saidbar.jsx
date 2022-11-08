import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNewFolder } from '../redux/slice-folder/sliceFolder';
import { v4 } from 'uuid';

import style from '../index.module.scss';
import Folder from './folder/Folder';

export default function Saidbar() {
    const dispatch = useDispatch();
    const ourFolder = useSelector(state => state.folder.folders)
    const [nameFolder, setNameFolder] = React.useState('');

    const addNewFolder = () => {
        const folder = {
            id: v4(),
            text: nameFolder,
            complated: false
        }
        dispatch(getNewFolder(folder));
        setNameFolder('')
    }
    return (<>
        <div className={style.saidbar}>
            <input value={nameFolder} onChange={(e) => setNameFolder(e.target.value)} placeholder='new folder' type="text" />
            <button className={style.saidbar__button} onClick={() => addNewFolder()}>add</button>
        </div>
        {ourFolder.map(folder => <Folder key={folder.id} value={folder} />)}
    </>)
}
