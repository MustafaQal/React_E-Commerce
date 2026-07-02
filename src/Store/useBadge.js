import { create } from "zustand";


export const useBadge = create ((set)=> ({
    badge:10,

    increaseby10: ()=>
        set((state)=> ({
            badge: state.badge +10,
        })),

    decreaseby10: ()=> 
        set((state)=> ({
            badge: state.badge -10,
        })),
}));

