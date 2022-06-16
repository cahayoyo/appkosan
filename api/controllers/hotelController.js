import Hotel from '../models/Hotel.js';
import Room from '../models/Room.js';

export const createHotel = async (req, res, next) => {
    const newHotel = new Hotel(req.body);

    try {
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
    } catch (err) {
        next(err);
    }
};

export const updateHotel = async (req, res, next) => {
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedHotel);
    } catch (err) {
        next(err);
    }
};

export const deleteHotel = async (req, res, next) => {
    try {
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json('Hotel Deleted');
    } catch (err) {
        next(err);
    }
};

export const getByIdHotel = async (req, res, next) => {
    try {
        const hotel = await Hotel.findById(req.params.id);
        res.status(200).json(hotel);
    } catch (err) {
        next(err);
    }
};

export const getAllHotels = async (req, res, next) => {
    const { min, max, ...others } = req.query;
    try {
        const hotels = await Hotel.find({
            ...others,
            cheapestPrice: { $gt: min || 1, $lt: max || 10000000 },
        }).limit(req.query.limit);
        res.status(200).json(hotels);
    } catch (err) {
        next(err);
    }
};

export const countByCity = async (req, res, next) => {
    const cities = req.query.cities.split(',');
    try {
        const list = await Promise.all(
            cities.map((city) => {
                return Hotel.countDocuments({ city: city });
            })
        );
        res.status(200).json(list);
    } catch (err) {
        next(err);
    }
};

export const countByType = async (req, res, next) => {
    try {
        const hotelCount = await Hotel.countDocuments({ type: 'hotel' });
        const apartmentCount = await Hotel.countDocuments({
            type: 'apartment',
        });
        const resortCount = await Hotel.countDocuments({ type: 'resort' });
        const villaCount = await Hotel.countDocuments({ type: 'villa' });
        const cabinCount = await Hotel.countDocuments({ type: 'cabin' });

        res.status(200).json([
            { type: 'hotel', count: hotelCount },
            { type: 'apartments', count: apartmentCount },
            { type: 'resorts', count: resortCount },
            { type: 'villas', count: villaCount },
            { type: 'cabins', count: cabinCount },
        ]);
    } catch (err) {
        next(err);
    }
};

export const countByUniversity = async (req, res, next) => {
    try {
        const gunadarmaCount = await Hotel.countDocuments({
            university: 'Gunadarma',
        });
        const uiCount = await Hotel.countDocuments({ university: 'UI' });
        const itbCount = await Hotel.countDocuments({ university: 'ITB' });
        const unpadCount = await Hotel.countDocuments({ university: 'UNPAD' });
        const ugmCount = await Hotel.countDocuments({ university: 'UGM' });

        res.status(200).json([
            { university: 'Universitas Gunadarma', count: gunadarmaCount },
            { university: 'Universitas Indonesia', count: uiCount },
            { university: 'Institut Teknologi Bandung', count: itbCount },
            { university: 'Universitas Padjadjaran', count: unpadCount },
            { university: 'Universitas Gadjah Mada', count: ugmCount },
        ]);
    } catch (err) {
        next(err);
    }
};

export const countAllHotels = async (req, res, next) => {
    try {
        const hotelsCount = await Hotel.countDocuments({ __v: 0 });
        res.status(200).json({ count: hotelsCount });
    } catch (err) {
        next(err);
    }
};

export const getHotelRooms = async (req, res, next) => {
    try {
        const hotel = await Hotel.findById(req.params.id);
        const list = await Promise.all(
            hotel.rooms.map((room) => {
                return Room.findById(room);
            })
        );
        res.status(200).json(list);
    } catch (err) {
        next(err);
    }
};
