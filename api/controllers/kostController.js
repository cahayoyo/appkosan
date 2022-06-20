import Kost from '../models/Kost.js';
import Room from '../models/Room.js';

export const createKost = async (req, res, next) => {
    const newKost = new Kost(req.body);

    try {
        const savedKost = await newKost.save();
        res.status(200).json(savedKost);
    } catch (err) {
        next(err);
    }
};

export const updateKost = async (req, res, next) => {
    try {
        const updatedKost = await Kost.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updateKost);
    } catch (err) {
        next(err);
    }
};

export const deleteKost = async (req, res, next) => {
    try {
        await Kost.findByIdAndDelete(req.params.id);
        res.status(200).json('Kost Deleted');
    } catch (err) {
        next(err);
    }
};

export const getByIdKost = async (req, res, next) => {
    try {
        const kost = await Kost.findById(req.params.id);
        res.status(200).json(kost);
    } catch (err) {
        next(err);
    }
};

export const getAllKosts = async (req, res, next) => {
    const { min, max, ...others } = req.query;
    try {
        const kosts = await Kost.find({
            ...others,
            cheapestPrice: { $gt: min || 1, $lt: max || 10000000 },
        }).limit(req.query.limit);
        res.status(200).json(kosts);
    } catch (err) {
        next(err);
    }
};

export const countByCity = async (req, res, next) => {
    const cities = req.query.cities.split(',');
    try {
        const list = await Promise.all(
            cities.map((city) => {
                return Kost.countDocuments({ city: city });
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
        const gunadarmaCount = await Kost.countDocuments({
            university: 'Gunadarma',
        });
        const uiCount = await Kost.countDocuments({ university: 'UI' });
        const itbCount = await Kost.countDocuments({ university: 'ITB' });
        const unpadCount = await Kost.countDocuments({ university: 'UNPAD' });
        const ugmCount = await Kost.countDocuments({ university: 'UGM' });

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

export const countAllKosts = async (req, res, next) => {
    try {
        const kostsCount = await Kost.countDocuments({ __v: 0 });
        res.status(200).json({ count: kostsCount });
    } catch (err) {
        next(err);
    }
};

export const getHotelRooms = async (req, res, next) => {
    try {
        const kost = await Kost.findById(req.params.id);
        const list = await Promise.all(
            kost.rooms.map((room) => {
                return Room.findById(room);
            })
        );
        res.status(200).json(list);
    } catch (err) {
        next(err);
    }
};
