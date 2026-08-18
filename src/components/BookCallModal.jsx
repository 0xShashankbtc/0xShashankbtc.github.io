import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, Video } from 'lucide-react';
import { SITE_METADATA } from '../data/portfolioData';

const DATES = ['Tomorrow', 'Thursday', 'Friday', 'Next Monday'];
const TIME_SLOTS = ['10:00 AM PST', '01:30 PM PST', '03:00 PM PST', '04:30 PM PST'];

export default function BookCallModal({ isOpen, onClose }) {
  const [selectedDate, setSelectedDate] = useState('Tomorrow');
  const [selectedTime, setSelectedTime] = useState('10:00 AM PST');
  const [booked, setBooked] = useState(false);

  if (!isOpen) return null;

  const handleBooking = () => {
    setBooked(true);
    setTimeout(() => {
      setBooked(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-fade-in">
      <div className="nyro-card w-full max-w-lg p-8 border border-white/20 relative shadow-2xl bg-[#12141a]">
        
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-white/50 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {booked ? (
          <div className="py-12 text-center space-y-4 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-white">Call Scheduled!</h3>
            <p className="text-sm text-white/70 max-w-xs mx-auto">
              You are booked for {selectedDate} at {selectedTime}. Calendar invitation has been sent to your inbox.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
                <Video className="w-3.5 h-3.5" />
                <span>15-Min Strategy Call</span>
              </div>
              <h3 className="text-2xl font-heading font-bold text-white">Book a Discovery Session</h3>
              <p className="text-xs text-white/60">
                Select a convenient date and time to discuss your product vision directly with {SITE_METADATA.name}.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-white/70 mb-2 uppercase flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  Select Date
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {DATES.map((date) => (
                    <button
                      key={date}
                      onClick={() => setSelectedDate(date)}
                      className={`p-3 rounded-xl border text-xs font-medium transition-all ${
                        selectedDate === date
                          ? 'bg-purple-600/20 border-purple-500 text-white font-semibold'
                          : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'
                      }`}
                    >
                      {date}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-white/70 mb-2 uppercase flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                  Select Time Slot
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {TIME_SLOTS.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`p-3 rounded-xl border text-xs font-medium transition-all ${
                        selectedTime === time
                          ? 'bg-cyan-600/20 border-cyan-500 text-white font-semibold'
                          : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={handleBooking}
              className="w-full py-4 rounded-xl bg-white text-black font-bold text-sm hover:bg-white/90 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] cursor-pointer active:scale-95"
            >
              Confirm 15-Min Booking
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
