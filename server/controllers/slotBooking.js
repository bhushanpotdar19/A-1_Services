import SlotBook from "../models/SlotBooking.js";
import User from "../models/User.js";
import { ServiceProvider } from "../models/ServiceProvider.js";

const postBookSlot = async (req, res) => {
    try {
        const { user, serviceProvider, bookingDate, serviceDate, userAddress, description } = req.body;

        // Validate required fields
        if (!user || !serviceProvider || !serviceDate) {
            return res.status(400).json({
                success: false,
                message: "Missing required fields"
            });
        }

        const slotBook = new SlotBook({
            user: user,
            serviceProvider: serviceProvider,
            bookingDate: new Date(),
            serviceDate: new Date(serviceDate), // Ensure serviceDate is parsed correctly
            userAddress: userAddress,
            description: description
        });

        const bookslot = await slotBook.save();

        res.status(201).json({
            success: true,
            message: "Slot booked successfully",
            data: bookslot
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server error",
            error: error.message
        });
    }
}

const getAllSlots = async (req, res) => {
    try {
        const { userId } = req.query;

        if (!userId) {
            return res.status(400).json({
                success: false,
                message: "Please provide a userId"
            });
        }

        const user = await ServiceProvider.findById(userId);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "ServiceProvider not found"
            });
        }

        const slotbook = await SlotBook.find({ "serviceProvider": userId })
            .populate('user') // Populate user details (adjust fields as needed)
            

        res.status(200).json({
            success: true,
            message: "Slots found successfully",
            data: slotbook
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server error",
            error: error.message
        });
    }
}

export { postBookSlot, getAllSlots };
