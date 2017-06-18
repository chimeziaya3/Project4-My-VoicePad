class FoldersController < ApplicationController
  def index
    @folders = Folder.all
    # @notes = []

    # @folders.each do |folder|
    #     @notes << folder.notes
    end
    
    render json: { 
                    message: "ok",  
                    folders_data: @folders, 
                    # notes_data: @notes 
                }
  end
  
  def show
      @note = Note.new
      @notes = Folder.find(params[:id]).notes
    end
    render json: { 
                    message: "ok",  
                    folders_data: @folder, 
                    # notes_data: @notes 
                }
    # begin
    #   @folder = Folder.find(params[:id])
    #   render json: { message: "ok", folders_data: @folder }
    # rescue ActiveRecord::RecordNotFound
    #   render json: { message: "no folder matches that ID" }, status: 404
    # rescue Exception
    #   render json: { message: "there was some other error" }, status: 500
    # end
  end

  def new
      @folder = folder.new
    end
    render json: { 
                    message: "ok",  
                    folders_data: @folder, 
                    # notes_data: @notes 
                }

    end

    def create
    @folder = folders.new(folder_params)
    respond_to do |format|
      if @folder.save
        format.html { redirect_to @folder, notice: 'Folder was successfully created.' }
        format.json { render :show, status: :created, location: @folder }
      else
        format.html { render :new }
        format.json { render json: @folder.errors, status: :unprocessable_entity }
      end
    end
    render json: { 
                    message: "ok",  
                    folders_data: @folder, 
                    # notes_data: @notes 
                }
  end
private
    def set_folder
        @folder = Folder.fin(params[:id])
    end
    
    def folder_params
        params.require(:folder).permit(:foldername)
    end
    

            
  

end
