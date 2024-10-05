import { formatDate } from "@/utils/date";

interface ListingCard {
    ticketId: number;
    eventName: string;
    eventDate: string;
    userId: string;
    venue: string;
    numberOfTickets: number;
    price: number;
    seatInfo: SeatInfoCard[];
    deadline: string;
    userName: string;
}

interface SeatInfoCard {
    seatNumber: number;
    block: string;
    level: number
}

function Ticket({ eventName, eventDate, venue, numberOfTickets, price, seatInfo, deadline, userName }: ListingCard) {
    return (
        <div className="ticket-card">
            <h2>{eventName}</h2>
            <p>{eventDate}</p>
            <p>{venue}</p>
            <p>{numberOfTickets}</p>
            <div>
                {seatInfo.map((s) => (
                    <div key={s.seatNumber}>
                        <p> Seat Number: {s.seatNumber}</p>
                        <p> Block: {s.block}</p>
                        <p> Price: {s.level}</p>
                    </div>
                ))}
            </div>
            <p>Price: ${price}</p>
            <p>Listing Expiry: ${formatDate(deadline)}</p>
            <p>Listed by: ${userName}</p>
            {venue && <p>{venue}</p>}
        </div>
    );
}

export default Ticket;
