import { Dialog, Transition } from '@headlessui/react'
import { Button } from '@material-tailwind/react';
import { Fragment, useRef, } from 'react'
export function ShowDeleteDialog({ isOpen, closeModal }: { isOpen: boolean, closeModal: (isSuccess: boolean) => void, }) {
    const initialFocus = useRef(null);
    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog initialFocus={initialFocus} as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        ref={initialFocus}
                                        className="text-lg my-2 font-medium leading-6 text-gray-900"
                                    >
                                        Delete
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                            Are you sure to delete?
                                            <span className='block' >Note: This action can&apos;t be reverse.</span>
                                        </p>
                                    </div>

                                    <div className="mt-4 flex gap-2">
                                        <Button
                                            color='red'
                                            variant='filled'
                                            // className="btnred"
                                            onClick={() => {
                                                closeModal(true);


                                            }}
                                        >
                                            Delete
                                        </Button>
                                        <Button
                                            color='blue'
                                            variant='filled'
                                            onClick={() => { closeModal(false); }}
                                        >
                                            Cancel
                                        </Button>

                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
