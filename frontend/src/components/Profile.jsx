// Profile.jsx
import React from 'react';
import { AiOutlineUser, AiOutlineMail, AiOutlinePhone, AiOutlineCalendar, AiOutlineSafetyCertificate, AiOutlineClockCircle } from 'react-icons/ai';

function Profile() {
    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold text-gray-800">Admin Profile</h1>

            <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center space-x-6 mb-6">
                    <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden flex items-center justify-center">
                        <AiOutlineUser size={48} className="text-gray-400" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800">John Doe</h2>
                        <p className="text-gray-600">Senior System Administrator</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InfoItem icon={AiOutlineMail} label="Email" value="johndoe@example.com" />
                    <InfoItem icon={AiOutlinePhone} label="Phone" value="+1 (555) 123-4567" />
                    <InfoItem icon={AiOutlineCalendar} label="Joined" value="January 15, 2020" />
                    <InfoItem icon={AiOutlineSafetyCertificate} label="Access Level" value="Full Administrator" />
                    <InfoItem icon={AiOutlineClockCircle} label="Last Login" value="June 26, 2024, 09:45 AM" />
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">System Overview</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <StatCard label="Active Servers" value="24" />
                    <StatCard label="Current Alerts" value="3" color="text-yellow-500" />
                    <StatCard label="System Uptime" value="99.99%" color="text-green-500" />
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity Log</h3>
                <ul className="space-y-4">
                    <LogItem action="Acknowledged critical alert on Server DB-01" time="10 minutes ago" />
                    <LogItem action="Updated firewall rules for App Server cluster" time="2 hours ago" />
                    <LogItem action="Performed system backup" time="Yesterday, 11:30 PM" />
                </ul>
            </div>
        </div>
    );
}

function InfoItem({ icon: Icon, label, value }) {
    return (
        <div className="flex items-center space-x-3">
            <Icon className="text-green-500 flex-shrink-0" size={24} />
            <div>
                <p className="text-sm text-gray-500">{label}</p>
                <p className="text-gray-800">{value}</p>
            </div>
        </div>
    );
}

function StatCard({ label, value, color = "text-blue-500" }) {
    return (
        <div className="bg-gray-50 rounded-lg p-4 text-center">
            <p className="text-gray-600 text-sm">{label}</p>
            <p className={`text-2xl font-bold ${color}`}>{value}</p>
        </div>
    );
}

function LogItem({ action, time }) {
    return (
        <li className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
            <p className="text-gray-600 flex-grow">{action}</p>
            <span className="text-sm text-gray-400">{time}</span>
        </li>
    );
}

export default Profile;