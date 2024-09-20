import LinkButton from '../../ui/LinkButton';

function EmptyCart() {
    return (
        <div className="px-4 py-3 w-1/3  flex flex-col mx-auto items-center gap-y-2 h-full">
            <LinkButton to="/menu"> &rarr;العودة إلى المنيو </LinkButton>
            <p className="font-semibold block">
                السلة فارغة. قم بإضافة بعض الأصناف إليها🍧️
            </p>
        </div>
    );
}

export default EmptyCart;
