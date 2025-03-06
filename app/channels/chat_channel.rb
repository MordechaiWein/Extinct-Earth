class ChatChannel < ApplicationCable::Channel
    
    def subscribed
        stream_from "chat_channel"
        ActionCable.server.broadcast("chat_channel", "-----------HELLO WORLD!-------------")
    end
end