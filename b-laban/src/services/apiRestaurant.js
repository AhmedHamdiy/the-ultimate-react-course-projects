import supabase from './supabase';

export async function getSliderImages() {
    const { data, error } = await supabase.from('slider_img').select('*');
    if (error) {
        console.error(error);
        throw new Error('there was an error fetching slider images');
    }
    return data;
}
export async function getMenuCategories() {
    const { data, error } = await supabase
        .from('menu_category')
        .select('id,name');
    if (error) {
        console.error(error);
        throw new Error('there was an error fetching menu categories');
    }
    return data;
}

export async function getCategoryImage(categoryId) {
    const { data, error } = await supabase
        .from('menu_category')
        .select('imgUrl')
        .eq('id', categoryId);

    if (error) {
        console.error('Error fetching data:', error);
        throw new Error('there was an error fetching menu categories');
    }
    return data;
}
export async function getCategoryItems(categoryId) {
    const { data, error } = await supabase
        .from('menu_item')
        .select('*')
        .eq('categoryId', categoryId);

    if (error) {
        console.error('Error fetching data:', error);
        throw new Error('there was an error fetching menu categories');
    }

    return data;
}
export async function getOrder(orderId) {
    const { data, error } = await supabase
        .from('order')
        .select(
            `
    id,
    deliveryDate,
    hasPriority,
    order_item (
        id,
      quantity,
      menu_item ( unitPrice , name )
    )
  `
        )
        .eq('id', orderId);

    if (error) {
        console.error('Error fetching data:', error);
        throw new Error('there was an error fetching order data');
    }
    return data[0];
}

export async function createOrder(newOrder) {
    const { hasPriority, cart } = newOrder;
    const time = new Date();
    const additionalMinutes = hasPriority ? 20 : 45;
    time.setMinutes(time.getMinutes() + additionalMinutes);
    const unixSeconds = Math.floor(time.getTime() / 1000);
    const deliveryDate = new Date(unixSeconds * 1000).toISOString();
    const { data: order, error: orderError } = await supabase
        .from('order')
        .insert([{ deliveryDate, hasPriority }])
        .select('id');
    if (orderError) {
        console.error('Error creating order:', orderError);
        return null;
    }

    const orderId = order[0].id;
    const orderItems = cart.map((item) => ({
        orderId,
        menuItemId: item.menuItemId,
        quantity: item.quantity,
    }));

    const { data: orderItemsData, error: orderItemsError } = await supabase
        .from('order_item')
        .insert(orderItems);

    if (orderItemsError) {
        console.error('Error inserting order items:', orderItemsError);
        return null;
    }
    return {
        orderId,
        orderItems: orderItemsData,
    };
}

export async function updateOrder(id, updateOrder) {
    const { data, error } = await supabase
        .from('order')
        .update(updateOrder)
        .eq('id', id);

    if (error) {
        console.error('Error updating order:', error);
        return null;
    }

    return data;
}
