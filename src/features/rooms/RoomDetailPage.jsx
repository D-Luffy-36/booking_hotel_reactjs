import React from 'react';
import { useParams } from 'react-router-dom';
import PageWrapper from "../../conponents/layout/PageWrapper";
import RoomHeader from "./sections/RoomHeader"


export default function RoomDetailPage({ rooms }) {
    const { id } = useParams(); // lấy id từ URL param
    const room = rooms.find(r => r._id.toString() === id);

    console.log(id);
    console.log(room);

    if (!room) {
        return <div>Room not found!</div>; // nếu không có room
    }
    return (
        <PageWrapper className="bg-amber-200 h-screen m-20">
            <div>
                <RoomHeader room={room} />
            </div>
        </PageWrapper>
    );
}