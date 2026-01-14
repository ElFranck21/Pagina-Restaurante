export default function Header() {
    return (
            <div className="flex justify-between items-center">
                <div>
                    <div 
                        className={'text-zinc-50 uppercase font-bold'}
                    >Restaurante</div>
                </div>
            <nav className="flex gap-8">
                <div 
                    className={'text-zinc-50 uppercase font-bold'}
                >Inicio</div>
                <div 
                    className={'text-red-400 uppercase font-bold'}
                >Menu</div>
                <div 
                    className={'text-zinc-50 uppercase font-bold'}
                >Contactanos</div>
            </nav>
        </div>
    );
}