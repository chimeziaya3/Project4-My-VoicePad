class NotesController < ApplicationController
    
    def create
    @note = Note.new('title': params[:note][:title], content: params[:note][:content], folder_id: params[:folder_id])
    if @note.save
      redirect_to post_path(params[:folder_id])
    else
      redirect_to post_path(params[:folder_id]), alert: "Missing Information"
    end
    render json: { 
                    message: "ok",  
                    notes_data: @note, 
                    # notes_data: @notes 
                }
  end
end
