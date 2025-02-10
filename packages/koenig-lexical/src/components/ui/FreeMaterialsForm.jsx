/* eslint-disable no-console */
import React from 'react';
import {CustomModal} from './Modal/index';
import {useEventListener} from '../../hooks/useEventListener';

export default function FreeMaterialsForm() {
    const [isOpen, setIsOpen] = React.useState(false);

    useEventListener('free-material-banner', ({action, data}) => {
        if (action === 'open') {
            setIsOpen(true);
        } else if (action === 'close') {
            setIsOpen(false);
        }
    });

    React.useEffect(() => {
        console.log('isOpen state changed to:', isOpen);
    }, [isOpen]);

    return isOpen ? (
        <CustomModal isOpen={isOpen} setIsOpen={setIsOpen}>
            <div className="koenig-lexical flex min-h-[400px] w-[700px] flex-col gap-4 rounded-sm bg-white px-6 py-8 shadow lg:gap-6 lg:px-8 lg:py-12">
                <article className='flex w-full flex-col gap-1'>
                    <h2 className='text-xl font-semibold'>Free Material Banner Form</h2>
                    <p className='text-grey-700' style={{fontSize: '14px', lineHeight: '20px'}}>This Free Materials Form Banner serves as a call-to-action to engage users with downloadable resources, such as ebooks, checklists, spreadsheets, or work orders. The banner allows users to select the type of material they want and provides a user-friendly interface for downloading these materials.</p>
                </article>
                <form className='flex w-full flex-col gap-4'>
                    <input className='!border-slate-200 w-full rounded-sm border px-4 py-2 text-sm text-grey-700 outline-none' maxLength={80} minLength={4} placeholder='Insert a title' spellCheck={false} style={{borderColor: '#9CA3AF'}} type='text' />
                    <input className='!border-slate-200 w-full rounded-sm border px-4 py-2 text-sm text-grey-700 outline-none' maxLength={180} minLength={4} placeholder='Insert a description' spellCheck={false} style={{borderColor: '#9CA3AF'}} type='text' />
                    <input className='!border-slate-200 w-full rounded-sm border px-4 py-2 text-sm text-grey-700 outline-none' maxLength={180} minLength={4} placeholder='Material PDF Link' spellCheck={false} style={{borderColor: '#9CA3AF'}} type='text' />
                    <select className='!border-slate-200 w-full rounded-sm border px-3.5 py-2.5 text-sm text-grey-700 outline-none' placeholder="Select a material type" style={{borderColor: '#9CA3AF', color: '#9CA3AF'}}>
                        <option>Select a material type</option>
                        <option value="ebook">Ebook</option>
                        <option value="spreadsheet">Spreadsheet</option>
                        <option value="checklist">Checklist</option>
                        <option value="workOrder">Work Order</option>
                    </select>
                    <select className='!border-slate-200 text-slate-500 w-full rounded-sm border px-3.5 py-2.5 text-sm outline-none' placeholder="Default workflow" style={{borderColor: '#9CA3AF', color: '#9CA3AF'}}>
                        <option value="freeMaterial">Default Workflow</option>
                        <option value="">Custom Workflow</option>
                    </select>
                    <button className='mt-2 w-full cursor-pointer rounded-sm bg-[#3F83F8] px-6 py-2 text-center font-medium text-white transition-all duration-300 hover:brightness-125' style={{fontSize: '16px', lineHeight: '24px'}} type='submit'>
                        Create Component
                    </button>
                </form>
            </div>
        </CustomModal>
    ) : (
        <p>teste - {String(isOpen)}</p>
    );
}
